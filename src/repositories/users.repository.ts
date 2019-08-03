import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Users} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.userid
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Users, dataSource);
  }
}
