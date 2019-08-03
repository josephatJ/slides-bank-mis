import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Userinfo extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  userinfoid: number;

  @property({
    type: 'string',
    required: true,
  })
  uid: string;

  @property({
    type: 'string',
  })
  code?: string;

  @property({
    type: 'date',
  })
  lastupdated?: string;

  @property({
    type: 'date',
    required: true,
  })
  created: string;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @property({
    type: 'string',
  })
  middlename?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phonenumber?: string;

  @property({
    type: 'string',
  })
  jobtitle?: string;

  @property({
    type: 'string',
  })
  introduction?: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'date',
  })
  birthday?: string;

  @property({
    type: 'string',
  })
  nationality?: string;

  @property({
    type: 'string',
  })
  employer?: string;

  @property({
    type: 'string',
  })
  education?: string;

  @property({
    type: 'string',
  })
  welcomemessage?: string;

  @property({
    type: 'string',
  })
  languages?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Userinfo>) {
    super(data);
  }
}
