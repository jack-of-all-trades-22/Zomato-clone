import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(public firestore: AngularFirestore, public storage: AngularFireStorage) {
    this.loadScripts();
    this.topScripts();
  }
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = ['assets/next.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  topScripts() {
    // This array contains all the files/CDNs
    const dynScripts = ['assets/top.js'];
    for (let i = 0; i < dynScripts.length; i++) {
      const nd = document.createElement('script');
      nd.src = dynScripts[i];
      nd.type = 'text/javascript';
      nd.async = false;
      document.getElementsByTagName('head')[0].appendChild(nd);
    }
  }
  ngOnInit(): void {
  }
  //   function rendermen(doc: any) {
  //     let div_sub = document.createElement('div');
  //     let div_img3 = document.createElement('div');
  //     let img = document.createElement('img');
  //     let a = document.createElement('a');
  //     let button = document.createElement('button');
  //     let button1 = document.createElement('button');
  //     let h4 = document.createElement('h4');

  //     div_sub.setAttribute('class', 'divsub1');
  //     div_img3.setAttribute('class', 'img3');
  //     div_img3.setAttribute('data-id', doc.id);
  //     img.src = doc.data().image;
  //     img.setAttribute('class', 'img2');
  //     a.setAttribute('class', 'add-to-wish');
  //     a.setAttribute('data-id', doc.id);
  //     button.setAttribute('class', 'wish');
  //     button.setAttribute('id', '#men-wish');
  //     button1.setAttribute('class', 'btnclose');
  //     button1.setAttribute('data-id', doc.id);
  //     h4.setAttribute('class', 'dress');
  //     div_sub.setAttribute('data-id', doc.id);
  //     button.textContent = "Add to Bag";
  //     h4.textContent = doc.data().type;
  //     const heart = `
  //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  //       <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
  //     </svg>
  //     `;
  //     button1.innerHTML = heart;

  //     a.appendChild(button);
  //     div_img3.appendChild(img);
  //     div_img3.appendChild(a);
  //     div_img3.appendChild(button1);
  //     div_sub.appendChild(div_img3);
  //     div_sub.appendChild(h4);

  //     men_rev.appendChild(div_sub);

  //     button.addEventListener('click', (e: any) => {
  //       e.preventDefault();
  //       let id = e.target.parentElement.getAttribute('data-id');

  //       querymen.doc(id).ref.get().then((querysnapshot) => {
  //         var image = doc.data().image;
  //         var type = doc.data().type;
  //         var product = doc.data().product;
  //         var price = doc.data().price;
  //         var cat = "MEN";
  //         var test = doc.data().wish;

  //         if (test == true) {
  //           window.alert("already added");
  //           //console.log("already added");
  //         }
  //         else {
  //           querycart.add({
  //             image: image,
  //             product: product,
  //             type: type,
  //             price: price,
  //             category: cat
  //           })
  //           querymen.doc(id).update({ wish: true });
  //         }
  //       })
  //     });

  //     button1.addEventListener('click', (e: any) => {
  //       e.preventDefault();
  //       let id = e.target.parentElement.getAttribute('data-id');

  //       querymen.doc(id).ref.get().then((querysnapshot) => {
  //         var image = doc.data().image;
  //         var type = doc.data().type;
  //         var product = doc.data().product;
  //         var price = doc.data().price;
  //         var cat = "MEN";
  //         var test = doc.data().wish;

  //         if (test == true) {
  //           window.alert("already added");
  //           //console.log("already added");
  //         }
  //         else {
  //           querywish.add({
  //             image: image,
  //             product: product,
  //             type: type,
  //             price: price,
  //             category: cat
  //           });
  //           querymen.doc(id).update({ wish: true });
  //         }
  //       })
  //     });
  //   }

  //   const men_rev = <HTMLDivElement>document.querySelector('#men-rev');

  //   let querymen = this.firestore.collection('men');
  //   let querywish = this.firestore.collection('wishlist');
  //   let querycart = this.firestore.collection('cart');

  //   querymen.ref.get().then((querySnapshot) => {
  //     querySnapshot.docs.forEach((doc) => {
  //       rendermen(doc);
  //     });
  //   })
  // }
  customOptions: OwlOptions = {
    items: 4,
    margin: 10,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  }
  csmOptions: OwlOptions = {
    items: 6,
    margin: 30,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  }


}