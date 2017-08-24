/**
 * Created by 15050978 on 8/24/2017.
 */
export class MessageInfo {
    messageKey: string;
    messageValue: string;
    messageType: string;

    constructor(messageKey: string, messageValue: string, messageType?: string) {
        this.messageKey = messageKey;
        this.messageValue = messageValue;
    }
}