// Fields
import { DateTimeField } from "../fields/header/date-time.field";
import { ProtocolTypeField } from "../fields/header/protocol-type.field";
import { ProtocolVersionField } from "../fields/header/protocol-version.fields";
import { TerminalIDField } from "../fields/header/terminal-id.field";
import { LengthOfDataField } from "../fields/header/length-of-data.field";
import { TagsField } from "../fields/header/tags.field";
import { CRC16Field } from "../fields/header/crc-16.field";

/**
 * Header
 */
export class Header {

    /**
     * Protocol type
     * @description Information on protocol type.
     */
    public readonly protocolType: ProtocolTypeField = new ProtocolTypeField();


    /**
     * Protocol version
     * @description Default value for standard implementation is 01.
     */
    public readonly protocolVersion: ProtocolVersionField = new ProtocolVersionField();

    /**
     * Terminal ID
     * @description Terminal logical identifier on which the transaction will be made.
     */
    public readonly terminalID: TerminalIDField = new TerminalIDField();

    /**
     * Date time
     * @description Date and Time of transaction.
     */
    public readonly dateTime: DateTimeField = new DateTimeField();

    /**
     * Tags
     * @description Field with tags of additional parameters.
     */
    public readonly tags: TagsField = new TagsField();

    /**
     * Length of data
     * @description Length of message data part. 
     */
    public readonly lengthOfData: LengthOfDataField = new LengthOfDataField();

    /**
     * CRC16 field
     * @description CRC16 of message data part.
     */
    public readonly CRC16: CRC16Field = new CRC16Field();
}