import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'mutationの結果' })
export class Result {
  @Field()
  success: boolean;
}
