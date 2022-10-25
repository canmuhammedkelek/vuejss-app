<template>
  <div class="wrapper">
  <SideBar></SideBar>
  <div id="content">
    <MainContentMenus></MainContentMenus>  
    <div>
      <v-row>
        <v-col class="col-md-4"> <h5>Ürün Listesi</h5></v-col>
          <v-col class="col-md-8">
              <div class="btn-group float-right" role="group" aria-label="Basic example">
                <v-btn class="success mr-2" elevation="2" small to="/yeni-urun" size="sm"> Ekle</v-btn>
                <v-btn class="danger" elevation="2" small @click="deleteItem"> Sil</v-btn>
              </div>
          </v-col>
       </v-row>
    <div>
      <v-app>
        <v-data-table
          v-model="selected"
          :items="items"
          :headers="headers"
          :items-per-page="10"
          class="elevation-1"
          show-select
          item-key="name"
        >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="accent"  x-small elevation="2" @click="editItem(item)" size="sm">Düzenle</v-btn>
          
        </template>
        </v-data-table>
        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">{{selected.name}}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Ürün Adı"
                    required
                    v-model="editedItem.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Barkod"
                    v-model="editedItem.barcode"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Ürün Adedi"
                    required
                    v-model="editedItem.quantity"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Stok"
                    v-model="editedItem.stok"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Ürün Fiyatı"
                    required
                    v-model="editedItem.price"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="KDV"
                    v-model="editedItem.vat"
                  ></v-text-field>
                </v-col>
              </v-row>
              <p>{{selectedItem.name}}</p>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              İptal Et
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="save"
            >
              Kaydet
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-app>
      
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import MainContentMenus from '../ContentArea/MainContentMenu.vue'
import SideBar from '../sidebar/SideBar.vue';
  export default {
    data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        headers: [
          { text: 'Ürün Adı', value: 'name', sortable: true },
          { text: 'Barkod', value: 'barcode', sortable: true },
          { text: 'Adet', value: 'quantity', sortable: true },
          { text: 'Fiyat', value: 'price', sortable: true },
          { text: 'Kdv', value: 'vat', sortable: true },
          { text: 'Toplam', value: 'total', sortable: true },
          { text: 'Stok', value: 'stok', sortable: true },
          { text: 'İşlemler', value: 'actions', sortable: false },
        ],
        items: [],  
        selected: [],
        selectedItem : [],
        dialog: false,  
        editedIndex: 1,
        editedItem: {
          name: '',
          quantity: 0,
          stok: 0,
          barcode: 0,
          price: 0,
          vat: 0,
          total: 0,
        },  
        defaultItem: {
          name: '',
          quantity: 0,
          stok: 0,
          barcode: 0,
          price: 0,
          vat: 0,
          total: 0,
        },  
      }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created : function(){
      this.initialize()
      var elem = this.$store.state.productList;
      for(var i=0; i < elem.length; i++){
        this.items.push( {
          stok : elem[i].stok,
          quantity : elem[i].quantity,
          name : elem[i].name,
          barcode : elem[i].barcode,
          price : elem[i].price,
          vat : elem[i].vat,
          total : elem[i].total
        })
      }
    },
    components : {
      MainContentMenus,
      SideBar
    },
    methods : {
      initialize () {
        this.items = [
          { stok: 3, quantity: 4, name : '22 mm Katlanır Lastik', barcode: 'B014J12', price : 30, vat: 18, total: 128 },
          { stok: 1, quantity: 2, name : 'Finish Quantum 80 Tablet', barcode: 'C122U42', price : 30, vat: 18, total: 128},
          { stok: 2, quantity: 8, name : 'Pril Gold 54 yıkama', barcode: 'J123I121', price : 30, vat: 18, total: 128},
          { stok: 0, quantity: 3, name : 'Gurtel Jumpsuit', barcode: 'P212I241', price : 30, vat: 18, total: 128 }
        ]
      },
      deleteItem(){
        if(this.selected < 1){
          alert("Lütfen Silmek İçin Önce Ürün Seçin!!")
        }else{
          if(confirm('Ürünü Silmek İstediğinize Emin misiniz?')){
          for(var i = 0; i <this.selected.length; i++){
            const index = this.items.indexOf(this.selected[i]);
            this.items.splice(index, 1);
          }
        }
        }
      },
      editItem(item){
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true;
      },
      save(){
        //this.selected= this.selectedItem
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.dialog = false;
      },
      
    },
    
    
  }
  
</script>
<style scoped>
.danger{
  background-color: #B71C1C!important;
  color: #fff;
}
.success{
  background-color: #388E3C!important;
  color: #fff!important;
}
.primary{
  background-color: #0D47A1!important;
  color: #fff!important;
}
</style>