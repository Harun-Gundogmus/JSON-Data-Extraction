const getBtn = document.getElementById('gt-bt');
const postBtn = document.getElementById('pst-bt');

const getData = () => {

    //AJAX tabanlı bağlantımızı oluşturduk.
    //Gelen veriyi JSON'a çevirdik çünkü konsolda da çevirmek istiyoruz.


    const test=new XMLHttpRequest();
    
    test.open('GET','https://jsonplaceholder.typicode.com/users');

    test.onload=()=>{

    const veri=JSON.parse(test.response);
    console.log(veri);
}
    test.send();
};

//.........................................................................//

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const test = new XMLHttpRequest();
      test.open(method, url);
  
     test.responseType = 'json';
  
      if (data) {
        test.setRequestHeader('Content-Type', 'application/json');
      }
  
      test.onload = () => {
        if (test.status >= 400) {
          reject(test.response);
        } else {
          resolve(test.response);
        }
      };
  
      test.onerror = () => {
        reject('İşlem Gerçekleşmedi!');
      };
  
      test.send(JSON.stringify(data));
    });
    return promise;
  };


  const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/users', {
        name: "morpheus",
        job: "leader"
    })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err);
      });
  };











//önce butonuma html tarafımda id verdim
  //Bu verdiğim id'yi bir değişkene document.getElementById ile bagladım
  //En son aşamada ise işlemi gerçekleştirdiğim arrow functıonı add event
  //listenersla bu değişkene matchledim
  getBtn.addEventListener('click', getData);
  postBtn.addEventListener('click', sendData);