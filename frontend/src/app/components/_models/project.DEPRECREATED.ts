/**
 * Created by duncan on 17/03/2017.
 */
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'projects'
})

export class Project extends JsonApiModel {

    @Attribute()
        id: string;

    @Attribute()
        name: string;

    @Attribute()
        created: string;

    @Attribute()
        modified: string;

    @Attribute()
        token: string;
}