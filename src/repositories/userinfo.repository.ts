import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Userinfo} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserinfoRepository extends DefaultCrudRepository<
  Userinfo,
  typeof Userinfo.prototype.userinfoid
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Userinfo, dataSource);
  }
}
