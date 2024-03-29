import { UserRole } from '../../../src/shared/utils/userRole/userRole';

export const userMock = () => {
  return {
    id: '729c7919-583c-40a5-b0ca-137e282345d4',
    name: 'Non-Admin for tests',
    email: 'user@teste.com',
    cpf: '12345678910',
    policies: true,
    created_at: '2023-02-21T00:25:07.000Z',
    updated_at: '2023-02-21T00:25:07.000Z',
  };
};

export const userUpdateRecoveryMock = () => {
  return {
    id: '729c7919-583c-40a5-b0ca-137e282345d4',
    name: 'Non-Admin for tests',
    email: 'user@teste.com',
    cpf: '12345678910',
    policies: true,
    created_at: '2023-02-21T00:25:07.000Z',
    updated_at: '2023-02-21T00:25:07.000Z',
    recoverPasswordToken: '729c7919-583c-40a5-b0ca-137e282345d4',
  };
};

export const userEntityMock = () => {
  return {
    id: '729c7919-583c-40a5-b0ca-137e282345d4',
    name: 'Non-Admin for tests',
    email: 'user@teste.com',
    cpf: '12345678910',
    personal_data: null,
    policies: true,
    password: '1234',
    type: UserRole.USER,
    created_at: new Date(),
    updated_at: new Date(),
  };
};
