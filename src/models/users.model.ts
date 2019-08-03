import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  userid: number;

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
    required: true,
  })
  created: string;

  @property({
    type: 'date',
  })
  lastupdated?: string;

  @property({
    type: 'number',
  })
  lastupdatedby?: number;

  @property({
    type: 'number',
  })
  creatoruserid?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  secret?: string;

  @property({
    type: 'date',
  })
  passwordlastupdated?: string;

  @property({
    type: 'date',
  })
  lastlogin?: string;

  @property({
    type: 'string',
  })
  restoretoken?: string;

  @property({
    type: 'string',
  })
  restorecode?: string;

  @property({
    type: 'date',
  })
  restoreexpiry?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  selfregistered: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  disabled: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}
