export interface MobiApiMessageAttachment {
  file_id: number;
  title: string;
  icon: string;
}

interface MobiApiMessage {
  id: number;
  title: string;
  content: string;
  sender: number;
  sender_surname: string;
  sender_name: string;
  sender_type: string;
  read: boolean;
  trashed: boolean;
  date: Date;
  viewers_view: boolean;
  attachments: MobiApiMessageAttachment[];
  recievers: any[];
  students?: any;
}

export default MobiApiMessage;
