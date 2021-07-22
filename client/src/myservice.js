import axios from 'axios';

const url = 'http://localhost:3000/books/api';

class myService{

    //get the books form backend
    static getBooks(){
        return new Promise( (resolve, reject)=>{
            try{
                const res =  axios.get(url);
                const data = res.data;
                resolve(data.map(book=>{
                    book
                }))
            }catch(err){
                reject(err)
            }
        })
    }
    //insert Books into DB
    //delete Books from DB
}

export default myService;