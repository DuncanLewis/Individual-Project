/**
 * Created by duncan on 27/03/2017.
 */
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'risks'
})
export class Risk extends JsonApiModel{
    @Attribute()
        id: string;

    @Attribute()
        title: string;

    @Attribute()
        description: string;

    @Attribute()
        active: boolean;

}