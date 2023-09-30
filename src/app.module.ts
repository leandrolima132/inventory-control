import { Module } from '@nestjs/common';

// MODULES
import { DataBaseModule } from './infra/database/database.module';
import { AppService } from './app.service';

@Module({
  imports: [
    DataBaseModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
  ],
  providers: [AppService],
})
export class AppModule {}
