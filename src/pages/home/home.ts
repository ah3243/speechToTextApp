import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

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
  ready: boolean = false;

  constructor(public navCtrl: NavController, platform: Platform, private alertCtrl: AlertController) {
    platform = platform;
    platform.ready().then((readySource) => { 
      console.log('platform ready..');
      this.ready = true;
    });
  }

  presentAlert(input: string ) {
    let alert = this.alertCtrl.create({
      title: input,
      buttons: ['ok']
    });
    alert.present();
  }  
  
  SpeechToText(){
    if(this.ready){
      this.presentAlert('inside speechToText');
    //   console.log('passed go..');
    //     this.recognition = new SpeechRecognition(); 
    //     this.recognition.lang = 'en-US';
    //     this.presentAlert();
    //     this.recognition.onnomatch = (event => {
    //         console.log('No match found.');
    //     });
    //     this.recognition.onerror = (event => {
    //         console.log('Error happens.');
    //     });
    //     this.recognition.onresult = (event => {
    //         if (event.results.length > 0) {
    //             console.log('Text: ', event.results[0][0].transcript);          
    //         }
    //     });     
    //     this.recognition.start();
    };
  }  

}
