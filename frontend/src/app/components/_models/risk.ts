/**
 * Created by duncan on 27/03/2017.
 */
import {JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo} from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'risks'
})
export class Risk extends JsonApiModel {
    @Attribute()
    id: string;

    @Attribute()
    user_id: string;

    @Attribute()
    project_id: string;

    @Attribute()
    title: string;

    @Attribute()
    content: string;

    @Attribute()
    active: boolean;

}