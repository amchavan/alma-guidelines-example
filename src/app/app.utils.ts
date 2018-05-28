import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {availabilityOptions, Globals, QUALIFICATIONS} from './app.globals';
import 'rxjs/add/observable/throw';
import {DataReducer} from "./datareducer";
import {isNullOrUndefined} from "util";
import {Availability} from "./availability";
import {utils} from "protractor";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Injectable()
export class Utils {

  constructor(public globals: Globals) {
  }


  extractAPIFromURL(url:string):string{
    console.log("====== url "+url);
    if (url==undefined) return '';
    var substr = url.substr(1,url.length+1);
    console.log("====== substr "+substr);
    if (substr.indexOf('/')>=0){
      return substr.substr(0,substr.indexOf('/'));
    } else {
      return substr;
    }
  }

  dateToString(date){
    var month = 1+date.getMonth();
    var day = date.getDate();
    return date.getFullYear()+"-"+(month<10?'0'+month:month)+"-"+(day<10?'0'+day:day);
  }

  getDate(seconds){
    var date = new Date(null);
    date.setSeconds(seconds/1000);
    return this.dateToString(date);
  }

  isNullOrUndefined(value) : boolean {
    if (value === null || value === undefined || value.length == 0) {
      return true;
    }
    return false;
  }

  hasQualification(dr : any , qual : string) {
    return (! isNullOrUndefined(dr.qualifications) && dr.qualifications.includes(qual))?"Yes":"No";
  }

  booleanToYesNo(value : boolean) {
    return (value)?"Yes":"No";
  }


  getDateFromTimestamp(timestamp : string) : string{
    return (new Date(timestamp)).toDateString();
  }

  getAvailabilityString( avail : string) : string {

    let res = "";

    availabilityOptions.forEach( val => {
      if ( val.id === avail) {
        res = val.name;
      }
    });
    return res;
  }

  getColorString( avail : string) : string {

    if ( avail == 'UNSET') {
      return "#808080";
    } else if ( avail == 'AVAIL') {
      return "#008000";
    } else if ( avail == 'AWAY') {
      return "#ad2121";
    } else if ( avail == 'IFNEED') {
      return "#FFFF00";
    }

    return "#ad2121";
  }

  getColorClass( avail : string) : string {

    if ( avail == 'UNSET') {
      return "unset";
    } else if ( avail == 'AVAIL') {
      return "avail";
    } else if ( avail == 'AWAY') {
      return "away";
    } else if ( avail == 'IFNEED') {
      return "ifneed";
    }

    return "away";
  }

  getAvailabilityCode( avail : string) : string {

    if ( avail == 'UNSET') {
      return "U";
    } else if ( avail == 'AVAIL') {
      return "AV";
    } else if ( avail == 'AWAY') {
      return "AW";
    } else if ( avail == 'IFNEED') {
      return "IN";
    }

    return "AW";
  }


  qualificationsString(val : string) : string {

    var res = '';


    if ( !this.isNullOrUndefined(val)) {
      if (val.indexOf('WLREVIEW')){
        res += ' WR';
      }
      if (val.indexOf('MANCAL')){
        res += ' MC';
      }
      if (val.indexOf('MANIMG')){
        res += ' MI';
      }
      if (val.indexOf('QA2APPRV')){
        res += ' QA';
      }
    }

    return res.trim();

  }

  availabilityDays( avail : any) : string {

    var today = new Date();
    var res = '<table>' +
      '<thead>' +
      '<tr>';
    for (let i = 0 ; i< 30; i++) {
      var nextDay = addDays(today, i);
      var colorClass = this.getColorClass(this.getAvailabilityType( nextDay, avail));
      var avCode = this.getAvailabilityCode(this.getAvailabilityType( nextDay, avail));

      res += "<th class='"+colorClass+"'>" +  avCode +"</th>";
    }
    res += '</tr></thead><tbody><tr>'
    for (let i = 0 ; i< 30; i++) {
      var nextDay = addDays(today, i);
      var colorClass = this.getColorClass(this.getAvailabilityType( nextDay, avail));

      res += "<td class='"+colorClass+"'>" +  nextDay.getDate()+"</td>";
    }
    return res +'</tr></tbody></table>';

  }

  getAvailabilityType( date : Date, avail : any) : string {

    var res = 'AWAY';

    if ( !this.isNullOrUndefined(avail)) {

      avail.forEach( val => {
        var start = new Date(val.dateStart);
        var end = new Date(val.dateEnd);
        if ( date >= start && date <= end ) {
          res = val.availability;
        }
      })
    }

    return res;
  }

}



