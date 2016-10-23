import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

// Possible import of Speech recognition plugin??
// import { SpeechRecognition } from 'SpeechRecognition';

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
    // Set isReady boolean
    platform.ready().then(() => { 
      console.log('platform ready..');
      this.ready = true;
    });
  }

  // Create debugging alerts
  presentAlert(input: string ) {
    let alert = this.alertCtrl.create({
      title: input,
      buttons: ['ok']
    });
    alert.present();
  }  

  // Speech to text function  
  SpeechToText(){
    if (this.ready) {
      // Debuggin alert
      this.presentAlert('inside speechToText');

      // Create new instance of Speech Recognition/set params
      this.recognition = new SpeechRecognition(); 
      this.recognition.lang = 'en-US';

      // Log if not match found
      this.recognition.onnomatch = (event => {
          console.log('No match found.');
      });

      // Log if Error
      this.recognition.onerror = (event => {
          console.log('Error happens.');
      });

      // Log results if found
      this.recognition.onresult = (event => {
          if (event.results.length > 0) {
              console.log('Text: ', event.results[0][0].transcript);          
          }
      });     
      
      // Start recognition
      this.recognition.start();
    };
  }  
}
