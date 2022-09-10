import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatlistService {

  userList = [
    {
      img: 'assets/imgs/users/user1.jpg',
      name: 'John',
      status: '0',
      time: '6:00 pm',
      callType: 'call',
      callTime: '7 May, 8:42 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/users/user2.jpg',
      name: 'Rahul',
      status: '1',
      time: '5:00 pm',
      callType: 'call',
      callTime: '5 May, 6:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/users/user3.jpg',
      name: 'Krishna',
      status: '2',
      time: '3:30 pm',
      callType: 'call',
      callTime: '1 April, 8:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/users/user4.jpg',
      name: 'David',
      status: '0',
      time: '12:30 pm',
      callType: 'video',
      callTime: '25 April, 8:00 am',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/users/user5.jpg',
      name: 'Jonh',
      status: '1',
      time: 'Yesterday',
      callType: 'video',
      callTime: '23 April, 7:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/users/user6.jpg',
      name: 'Mike',
      status: '2',
      time: 'Yesterday',
      callType: 'call',
      callTime: '19 April, 8:42 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/users/user7.jpg',
      name: 'Joseph',
      status: '2',
      time: 'Yesterday',
      callType: 'video',
      callTime: '19 April, 6:42 pm',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/users/user8.jpg',
      name: 'Alize',
      status: '2',
      time: '07/05/20',
      callType: 'video',
      callTime: '17 April, 5:00 pm',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/users/user9.jpg',
      name: 'Emma',
      status: '1',
      time: '07/05/20',
      callType: 'call',
      callTime: '15 April, 9:00 am',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/users/user10.jpg',
      name: 'Sophia',
      status: '1',
      time: '05/05/20',
      callType: 'call',
      callTime: '10 April, 10:00 pm',
      callStatus: '1',
    },
  ];
  constructor() { }
}
