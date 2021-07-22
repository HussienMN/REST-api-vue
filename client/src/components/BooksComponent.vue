<template>
    <div class="container"> 
        <hr>
        <div class="main">
            <div class="post-box" v-for="book in books" 
                v-bind:key='book.id'
                v-bind:title='book.title'
                v-bind:author='book.author'
                v-bind:publisher='book.publisher'
                v-bind:publish_date='book.publish_date'
                v-bind:issn='book.issn'
                v-bind:pages='book.pages'
                v-bind:category='book.category'
                
            >
                <span class="post-views">Author :{{book.author}}</span>
                <h3 class="post-title"><a href="/my_book">Title: {{book.title}}</a></h3>
                <span class="post-date">Publisher:{{book.publisher ? book.publisher: 'Unknown'}}</span>
                <p class="post-content">Publish date: {{book.publish_date ? book.publish_date:'Unknown'}}</p>
                <div class="row">
                    <div class="col-sm-6">
                        <span class="post-author">ISSN: {{book.issn ? book.issn : 'ISSN not available'}}</span>
                    </div>
                    <div class="col-sm-6">
                        <span class="post-category">No. of Pages:{{book.pages ? book.pages: 'Unknown'}}</span>
                    </div> 
                    <div class="col-sm-6">
                        <span class="post-category">Category: {{book.category ? book.category: 'Unknown'}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="side">

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'books',
    data(){
        return{
             books: []
        }
    },
    created(){
        let url = 'http://localhost:3000/books/api';
        axios.get(url).then(Response=>{
            this.books = Response.data
        })
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin: auto;
	width: 1000px;
}
.main{
    width: 60%;
}
a{
    text-decoration: none;
}
.side{
    width: 40%;
}
.post-box{
    padding: 15px;
    background-color: silver;
    border-radius: 6px;
    text-shadow: 0 0 10px #FFF;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views{
        color: tomato;
        background-color: floralwhite;
        border-radius: 4px;
        position: absolute;
        right: 5px;
        top: 5px;
        padding: 1px 5px;
    }
    .post-date{
        color: tomato;
        display: block;
        padding: 0 0 5px;
    }
    .post-content{
        line-height: 1.8;
    }
    .post-author{
        padding: 6px 10px;
        border-radius: 4px;
        background-color: cadetblue;
        color: white;
        float: left;
    }
    .post-category{
        padding: 6px 10px;
        margin-right: 4px;
        border-radius: 4px;
        background-color: cadetblue;
        color: white;
        float: right;
    }
}
</style>