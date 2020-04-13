/*
 * @Author: your name
 * @Date: 2020-04-10 16:46:21
 * @LastEditTime: 2020-04-10 17:38:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WWW\personal\postal\test01\postWorker.js
 */
import postal from 'postal'
import {get} from 'lodash'
const postworker = postal.channel('web')
postworker.subscribe("#",function(data,envolope){
    console.log('web端接收')
    self.postMessage({
        channel: get(envolope, 'channel'),
        topic: get(envolope, 'topic'),
        data: get(envolope, 'data')
    })
})
self.onmessage = function(event){
    console.log(event.data)
    postal.publish({
        channel: get(event, 'data.channel'),
        topic: get(event, 'data.topic'),
        data: get(event, 'data.data')
    })
}
postal.subscribe({
    channel: 'worker',
    topic: 'get_flight_schedule_data',
    callback: async data => {
        console.log(333)
        console.log(data)
    }
})