import { CreateCustomerDTO } from '@monorepo/models';

function main(): void {
  const dto: CreateCustomerDTO = new CreateCustomerDTO();

  console.log(dto);
}

main();