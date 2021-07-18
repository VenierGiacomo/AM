import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  startChall: string= 'none';
  dayData: any[];
  weekData: any[];
  monthData: any[];
  yearData: any[];
  valseason: Array<number> = []
// Ng model
  selectedView = 'today'
  gradem = 1
  mult =0.2

  view: any[] ;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = false;
  showYAxisLabel = true;
  yAxisLabel = false;
  maxYAxisTickLength = 7

  colorScheme = {
    domain: ['#1151FF']
  };

  // line, area
  autoScale = true;


  por: boolean = true
  def: boolean = false
  cen: boolean = false
  att: boolean = false

  playerName: any;
  player: any;
  constructor(private nav: NavController, private route: ActivatedRoute, private dataService: DataService) {
   
}

onSelect(event) {
  console.log(event);
}

  ngOnInit() {
    this.playerName =this.route.snapshot.params['name']
    this.player = this.dataService.getData(this.playerName);
    setTimeout(() => {
      while(this.player.grades.length < 7){
        if(this.player.grades == "/"){
          this.player.grades = [-1,0,0,0,0,0,0]
        }else{
          var newgrade = Math.round(((this.player.grades[this.player.grades.length-1]+ (((this.player.grades.length*this.mult)/Math.sqrt(this.player.grades.length)/1.1))*this.gradem)+0.2)*10)/10
          this.player.grades.push(newgrade)
          this.gradem = -1 * this.gradem
        }
      }
      console.log(this.player)
      console.log(this.player.grades)
      for(let i in this.player.grades){
        var value: number
        var num: number
        value = this.player.value
        num = Math.round((value+this.player.grades[i]*0.2)*10000)
       // num =10
        this.valseason.push(num)
        console.log(this.valseason[i])
    }}, 500);
    

    setTimeout(() => {
     this.dayData = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "Lun",
            "value": this.valseason[this.valseason.length-7]
          },
          {
            "name": "Mar",
            "value": this.valseason[this.valseason.length-6]
          },
          {
            "name": "Mer",
            "value": this.valseason[this.valseason.length-5]
          },
          {
            "name": "Gio",
            "value": this.valseason[this.valseason.length-4]
          },
          {
            "name": "Ven",
            "value": this.valseason[this.valseason.length-3]
          },
          {
            "name": "Sab",
            "value": this.valseason[this.valseason.length-2]
          },
          {
            "name": "Dom",
            "value": this.valseason[this.valseason.length-1]
          },
        ]
      },
    
      
    ];}, 1000);
    this.weekData = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "10/03",
            "value": 73000
          },
          {
            "name": "11/03",
            "value": 89400
          },
          {
            "name": "12/03",
            "value": 88400
          },
          {
            "name": "13/03",
            "value": 66000
          },
          {
            "name": "14/03",
            "value": 105400
          },
          {
            "name": "15/03",
            "value": 78700
          },
          {
            "name": "16/03",
            "value": 82700
          },
          {
            "name": "17/03",
            "value": 89400
          },
          {
            "name": "18/03",
            "value": 75000
          },
          {
            "name": "19/03",
            "value": 52400
          },
        ]
      },
    ];

this.monthData= [
        {
        "name": "Germany",
        "series": [
          {
            "name": "gen",
            "value": 73000
          },
          {
            "name": "feb",
            "value": 89400
          },
          {
            "name": "mar",
            "value": 88400
          },
          {
            "name": "apr",
            "value": 66000
          },
          {
            "name": "mag",
            "value": 105400
          },
          {
            "name": "giu",
            "value": 78700
          },
          {
            "name": "lug",
            "value": 82700
          },
          {
            "name": "ago",
            "value": 89400
          },
          {
            "name": "set",
            "value": 75000
          },
          {
            "name": "ott",
            "value": 52400
          },
        ]
      },
    ];

    this.yearData= [
      {
      "name": "Germany",
      "series": [
        {
          "name": "Sett 1",
          "value": 73000
        },
        {
          "name": "Sett 2",
          "value": 89400
        },
        {
          "name": "Sett 3",
          "value": 88400
        },
        {
          "name": "Sett 4",
          "value": 66000
        },
        {
          "name": "Sett 5",
          "value": 105400
        },
        {
          "name": "Sett 6",
          "value": 78700
        },
        {
          "name": "Sett 7",
          "value": 82700
        },
        {
          "name": "Sett 8",
          "value": 89400
        },
        {
          "name": "Sett 9",
          "value": 75000
        },
      ]
    },
  ];
  }
  
  today(){
    this.por=true
    this.def=false
    this.cen=false
    this.att=false
    this.selectedView = 'today'
  }
  week(){
    this.por=false
    this.def=true
    this.cen=false
    this.att=false
    this.selectedView = 'week'
  }
  month(){
    this.por=false
    this.def=false
    this.cen=true
    this.att=false
    this.selectedView = 'month'
  }
  year(){
    this.por=false
    this.def=false
    this.cen=false
    this.att=true
    this.selectedView = 'year'
  }
  back(){
    this.nav.navigateBack('/tabs/market/buy')
  }
  swipe(){
    this.nav.navigateRoot('/tabs/market/buy/summary/'+ this.player.name);
  }

}
