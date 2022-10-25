<template>
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <MainContentMenus></MainContentMenus>  
            <div>
                <v-row>
                    <v-col class="col-md-4"> <h5>Ürün Ekle</h5></v-col>
                    <v-col class="col-md-8">
                        <div class="btn-group float-right" role="group" aria-label="Basic example">
                        <v-btn class="primary" @click="onSubmit" size="sm" type="submit" elevation="2" small>Kaydet</v-btn>
                        <v-btn class="alert ml-2" to="/urunler" elevation="2" small>Vazgeç</v-btn>
                    </div>
                    </v-col>
                </v-row>
                <hr>
                <v-form @submit="onSubmit">
                        <v-row>
                        <v-col class="col-md-8">
                            <div class="AddProduct">
                                    <label for="productName">Ürün Adı</label>
                                    <v-text-field id="productName" v-model="newProduct.name"></v-text-field>

                                    <label for="productBarcode">Barkod</label>
                                    <v-text-field id="productBarcode" v-model="newProduct.barcode"></v-text-field>

                                    <label for="productQuantity">Adet</label>
                                    <v-text-field id="productQuantity" v-model.trim="newProduct.quantity"></v-text-field>

                                    <label for="productStok">Stok</label>
                                    <v-text-field id="productStok" v-model="newProduct.stok"></v-text-field>
                                </div>
                            </v-col>
                            <v-col class="col-md-4">
                                <div class="AddProduct">
                                    <h4>Fiyatlandırma</h4>
                                    <v-form-group>
                                        <v-row>
                                            <v-col>
                                                <label for="productName">Fiyat</label>
                                                <v-text-field id="productName" v-model="newProduct.price"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <label for="productName">KDV</label>
                                                <v-text-field id="productName" v-model="newProduct.vat"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-form-group>
                                </div>
                            </v-col>
                            </v-row>
                    </v-form>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '../sidebar/SideBar.vue'
import MainContentMenus from '../ContentArea/MainContentMenu.vue'
export default {
data(){
    return {
        products : [],
        newProduct : {}
    }
},
methods : {
    onSubmit(){
        this.products.push(this.newProduct);
        this.$store.state.productList = this.products;
        console.log(this.products);
         this.newProduct = {
          stok : null,
          quantity : null,
          name : null,
          barcode : null,
          price : null,
          vat : null,
          total : null
        }
    }
},
components :{
    SideBar,
    MainContentMenus
}
}
</script>
<style scoped>
    .AddProduct{
        border: 1px solid ;
        border-radius: 5px;
        padding: 20px;
        border-color: #EAECF0;
        box-shadow: rgba(16, 24, 40, 0.06);
    }
    .content{
        padding: 20px;
        width: 100%;
    }
    .mt-3{
        margin-top: 25px!important;
    }
</style>