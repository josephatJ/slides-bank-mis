import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Users} from '../models';
import {UsersRepository} from '../repositories';

export class UsersController {
  constructor(
    @repository(UsersRepository)
    public usersRepository : UsersRepository,
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: {'x-ts-type': Users}}},
      },
    },
  })
  async create(@requestBody() users: Users): Promise<Users> {
    return await this.usersRepository.create(users);
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'Users model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  ): Promise<Count> {
    return await this.usersRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of Users model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Users}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Users)) filter?: Filter,
  ): Promise<Users[]> {
    return await this.usersRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'Users PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() users: Users,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  ): Promise<Count> {
    return await this.usersRepository.updateAll(users, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: {'x-ts-type': Users}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Users> {
    return await this.usersRepository.findById(id);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'Users PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() users: Users,
  ): Promise<void> {
    await this.usersRepository.updateById(id, users);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'Users PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() users: Users,
  ): Promise<void> {
    await this.usersRepository.replaceById(id, users);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'Users DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usersRepository.deleteById(id);
  }
}
