import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Travel extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  tripName?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  places?: object[];

  @property({
    type: 'string',
  })
  placeName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Travel>) {
    super(data);
  }
}
