<template>
<div>
    <v-app id="">
        <v-treeview v-model="tree" :open="open" :items="items" item-key="name">
        <template v-slot:prepend="{ item }"> 
            <v-btn v-if="!item.file" class="ma-2 sm" @click="addFolder(item)">Ekle</v-btn>
        </template>
        </v-treeview>
        <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
            <v-card-title>
            Kategori Ekle
            </v-card-title>
            <v-card-text>
            <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="nomePasta" label="Kategori İsimi"></v-text-field>
            </v-col>
            </v-card-text>
            <v-card-actions>
            <v-btn  text @click="dialog2 = false" > Kapat </v-btn>
            <v-btn  text @click="addChildFolder()" > Ekle </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-app>
</div>
</template>

<script>

export default {
     data(){
        return{
            fd: [],
            dialog2: false,
            nomePasta: '',
            nextId: 0,
            open: ['public'],
            tree: [],
            items: [
            { name: 'Kategori 1', 
                children: [
                { name: 'Kategori 1.2'},
                ],
            },
            { name: 'Kategori 2', 
                children: [
                { name: '	Kategori 2.1'},
                ],
            },
            { name: 'Kategori 3',
                children: [
                { name: 'Kategor 3.1'},
                ],
            },
            { name: 'Kategori 4',
                children: [
                { name: 'Kategori 4.1'},
                ],
            },
            { name: 'Kategori 5',
                children: [
                { name: '	Kategori 5.1',
                    children: [
                    { name: 'Kategori 5.1.1'}
                    ],
                },
                { name: '	Kategori 5.2',
                    children: [
                    { name: 'Kategori 5.2.1'}
                    ],
                },
                { name: 'Kategori 5.3',
                    children: [
                    { name: 'Kategori 5.3.1'}
                    ],
                },
                { name: 'Kategori 5.4',
                    children: [
                    { name: 'Kategor 5.4.1'}
                    ],
                }
                ],
            },
            ],
            editedIndex: -1,
        }
    },

    watch: {
        dialog2 (val) {
        val || this.close()
        },
    },
    
   methods: {
    
    addFolder (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = item
      this.dialog2 = true
    },
    
    addChildFolder() {
      if (!this.editedItem.children) {
        this.$set(this.editedItem, "children", []);
      }

      const name = this.nomePasta;
      const id = this.nextId++;
      this.editedItem.children.push({
        id,
        name
      });
      this.dialog2 = false
    },
  }
}
</script>