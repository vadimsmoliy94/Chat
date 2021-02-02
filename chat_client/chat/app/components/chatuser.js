import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'
import io from 'socket.io-client'

export default class ChatuserComponent extends Component {
    inputMes(e) {
        let mes = e.targer.value;
        console.log(mes);
    }
}
