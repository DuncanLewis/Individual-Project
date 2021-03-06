/**
 * Created by duncan on 16/03/2017.
 */
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'user'
})

export class User extends JsonApiModel {

    @Attribute()
        id: string;

    @Attribute()
        username: string;

    @Attribute()
        password: string;

    @Attribute()
        firstName: string;

    @Attribute()
        lastName: string;

    @Attribute()
        active: boolean;

    @Attribute()
        created: string;

    @Attribute()
        modified: string;

    @Attribute()
        token: string;
}