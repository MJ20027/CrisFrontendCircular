import { Component, HostListener } from '@angular/core';
export interface MyObject {
  serial:number;
  heading: string;
  content: string[];
}
@Component({
  selector: 'app-my-components',
  templateUrl: './my-components.component.html',
  styleUrls: ['./my-components.component.css']
})


export class MyComponentsComponent {


  isRadialImgVisible: boolean = true;
  isScreen400: boolean = true;

  loopCount: number;
  delaySeconds: number;
  loopRunning: boolean = true;

  constructor() {
    this.checkScreenWidth();
    this.loopCount = 6; 
    this.delaySeconds = 2; 
    // this.runDelayedLoop(0);
    this.img1Link();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.isRadialImgVisible = (screenWidth >= 850);

    this.isScreen400 = (screenWidth >= 399);


  }


  myArray: MyObject[] = [
    {serial:1 , heading: "VISTAR VISION", content: ['Drivers, Goals and Objectives of Business Unit - High level requirements', 'Define KPIs and Architecture Governance framework'] },
    {serial:2 ,heading: "IR INFRASTRUCTURE", content: ['Assessment of current state/Gap Analysis', 'Define Target Business Architecture aligined with vision'] },
    {serial:3 ,heading: "INFORMATION, APPLICATION, TECHNOLOGY & SECURITY ARCHITECTURE", content: ['Assessment of current state/Gap Analysis', 'Define Target State Architecture'] },
    {serial:4 ,heading: "TARGET ARCHITECTURE FOR PRIORITY BUSINESS AREAS", content: ['Detailed Solution Architecture Roadmap & recommendations - for 3 identified business cases'] },
    {serial:5 ,heading: "IMPLEMENTATION PLAN", content: ['Implementation plan for priority areas', 'Target service catalogue'] },
    {serial:6 ,heading: "CHANGED MANAGEMENT", content: ['Detailed Architecture Governance Strategy', 'Change Management plan'] },

    // Add more objects as needed
  ];
  selectedContent: string[] = [];
  selectedheading: string = '';
  selectedSerial: number = -1;
  img1Clicked: boolean = true; 
  img2Clicked: boolean = false;
  img3Clicked: boolean = false;
  img4Clicked: boolean = false;
  img5Clicked: boolean = false;
  img6Clicked: boolean = false;

  img1Link() {
    this.img1Clicked = true;
    this.img2Clicked = false;
    this.img3Clicked = false;
    this.img4Clicked = false;
    this.img5Clicked = false;
    this.img6Clicked = false;

    const index = 0;
    this.selectedSerial = this.myArray[index].serial;
    this.selectedheading = this.myArray[index].heading;
    this.selectedContent = this.myArray[index].content;
  }

  img2Link() {
    this.img1Clicked = false;
    this.img3Clicked = false;
    this.img4Clicked = false;
    this.img5Clicked = false;
    this.img6Clicked = false;
    this.img2Clicked = true;
    const index = 1;
    this.selectedSerial = this.myArray[index].serial;
    this.selectedheading = this.myArray[index].heading;
    this.selectedContent = this.myArray[index].content;
  }
  img3Link() {
    this.img2Clicked = false;
    this.img1Clicked = false;
    this.img4Clicked = false;
    this.img5Clicked = false;
    this.img6Clicked = false;

    this.img3Clicked = true;
    const index = 2;
    this.selectedSerial = this.myArray[index].serial;
    this.selectedheading = this.myArray[index].heading;
    this.selectedContent = this.myArray[index].content;
  }
  img4Link() {
    this.img2Clicked = false;
    this.img3Clicked = false;
    this.img1Clicked = false;
    this.img5Clicked = false;
    this.img6Clicked = false;

    this.img4Clicked = true;
    const index = 3;
    this.selectedSerial = this.myArray[index].serial;
    this.selectedheading = this.myArray[index].heading;
    this.selectedContent = this.myArray[index].content;
  }
  img5Link() {
    this.img2Clicked = false;
    this.img3Clicked = false;
    this.img4Clicked = false;
    this.img1Clicked = false;
    this.img6Clicked = false;

    this.img5Clicked = true;
    const index = 4;
    this.selectedSerial = this.myArray[index].serial;
    this.selectedheading = this.myArray[index].heading;
    this.selectedContent = this.myArray[index].content;
  }
  img6Link() {
    this.img2Clicked = false;
    this.img3Clicked = false;
    this.img4Clicked = false;
    this.img5Clicked = false;
    this.img1Clicked = false;

    this.img6Clicked = true;
    const index = 5;
    this.selectedSerial = this.myArray[index].serial;
    this.selectedheading = this.myArray[index].heading;
    this.selectedContent = this.myArray[index].content;
  }

  // for automatic interation of circular content

  // runDelayedLoop(iteration: number) {
  //   if (iteration >= this.loopCount) {
  //     iteration = 0;
  //   }

  //   if(iteration==0){
  //     this.img1Link();
  //   }
  //   else if(iteration==1){
  //     this.img2Link();
  //   }
  //   else if(iteration==2){
  //     this.img3Link();
  //   }
  //   else if(iteration==3){
  //     this.img4Link();
  //   }
  //   else if(iteration==4){
  //     this.img5Link();
  //   }
  //   else if(iteration==5){
  //     this.img6Link();
  //   }

  //   if (this.loopRunning == true) {
  //     setTimeout(() => {
  //       if (this.loopRunning == true){
  //         this.runDelayedLoop(iteration + 1);
  //       }
  //     }, this.delaySeconds * 1000);
  //   }

  // }

  stopDelayedLoop1() {
    // this.loopRunning = false;
    this.img1Link();
  }
  stopDelayedLoop2() {
    // this.loopRunning = false;
    this.img2Link();
  }
  stopDelayedLoop3() {
    // this.loopRunning = false;
    this.img3Link();
  }
  stopDelayedLoop4() {
    // this.loopRunning = false;
    this.img4Link();
  }
  stopDelayedLoop5() {
    // this.loopRunning = false;
    this.img5Link();
  }
  stopDelayedLoop6() {
    // this.loopRunning = false;
    this.img6Link();
  }
  

  // restartDelayedLoop() {
  //   this.loopRunning = true;
  //   this.runDelayedLoop(0); 
  // }
}


