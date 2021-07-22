<template>
  <div>
    <p>List of books</p>
    <table id="customers">
      <tr>
        <th>ISSN</th>
        <th>Title</th>
        <th>Author</th>
      </tr>

      <tr v-for='book in books' v-bind:item='book' v-bind:key='book.issn' v-bind:title='book.title' v-bind:author='book.author'>
        <td>{{book.issn ? book.issn : 'no ISSN available'}}</td>
        <td>{{book.author}}</td>
        <td>{{book.title}}</td>
      </tr>
    </table>  
  </div>
</template>

<script>
// import myService from '../myservice'
import axios from 'axios'
export default {
  name: "Main",
  data(){
    return{
      books: [],
      err: '',
      text: ''
    }
  },
  props: {
    msg: String,
  },
  created() {
      let uri = 'http://localhost:3000/books/api';
      axios.get(uri).then(response => {
        this.books = response.data;
  })
  }  
  // async created(){
  //   try{
  //     this.books = await myService.getBooks();
  //   }catch(err){
  //     this.err = err.message;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
