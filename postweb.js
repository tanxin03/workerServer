/*
 * @Author: your name
 * @Date: 2020-04-10 16:48:12
 * @LastEditTime: 2020-04-10 17:43:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WWW\personal\postal\test01\postweb.js
 */
import _ from 'lodash'
import postal from 'postal'
import postwroker from 'worker-loader!./postworker'
export default class postweb{
    constructor(){}
    start(){
        this.worker = new postwroker()
        console.log(this.worker)
        const web = postal.channel('worker')
        web.subscribe("#", (data, envolope)=>{
            this.worker.postMessage({
                channel: _.get(envolope, 'channel'),
                topic: _.get(envolope, 'topic'),
                data: _.get(envolope, 'data')
            })
        })
    }
}
