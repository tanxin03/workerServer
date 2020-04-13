/*
 * @Author: your name
 * @Date: 2020-04-10 16:36:10
 * @LastEditTime: 2020-04-10 17:40:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WWW\personal\postal\test01\main.js
 */
import postal from 'postal'
import postweb from './postweb'
new postweb().start()
postal.publish({
    channel: 'worker',
    topic: 'get_flight_schedule_data',
    data:{
        token: '123456'
    }
})
postal.publish({
    channel: 'web',
    topic: 'get_flight_schedule_data',
    data:{
        token: '123456'
    }
})