import { Component } from '@angular/core';
// import { AlertController } from 'ionic-angular';

import { Platform } from 'ionic-angular';

import { NavController } from 'ionic-angular';

declare var SpeechRecognition: any;
declare var platform: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recognition: any;

// , private alertCtrl: AlertController  
  constructor(public navCtrl: NavController, platform: Platform) {
    platform = platform;
  }

//  alertFunc(input: string) {
//     let alert = this.alertCtrl.create({
//       title: input,
//       buttons: ['Ok']
//     });
//     alert.present();
//   }

  SpeechToText(){
    platform.ready().then(() => {
      console.log('passed go..');
        this.recognition = new SpeechRecognition(); 
        this.recognition.lang = 'en-US';
        // this.alertFunc("hellome");
        this.recognition.onnomatch = (event => {
            console.log('No match found.');
        });
        this.recognition.onerror = (event => {
            console.log('Error happens.');
        });
        this.recognition.onresult = (event => {
            if (event.results.length > 0) {
                console.log('Text: ', event.results[0][0].transcript);          
            }
        });     
        this.recognition.start();
    });
  }  

}
