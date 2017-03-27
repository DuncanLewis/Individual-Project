/**
 * Created by duncan on 27/03/2017.
 */
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'applications'
})
export class Application extends JsonApiModel{
    @Attribute()
        id: string;

    @Attribute()
        name: string;

    @Attribute()
        abbreviation: string;

    @Attribute()
        description: string;
}
