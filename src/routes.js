import HomeArea from './components/HomeArea.vue'
import Products from './components/product/ProductAre.vue'
import Category from './components/category/CategoriesArea.vue'
import NewProduct from './components/product/ProductAdd.vue'
export const routes = [
    {path : '', component : HomeArea},
    {path : '/home', component : HomeArea},
    {path : '/urunler', component : Products},
    {path : '/kategoriler', component : Category},
    {path : '/yeni-urun', component : NewProduct},
];

