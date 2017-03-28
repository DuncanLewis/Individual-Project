/**
 * Created by duncan on 28/03/2017.
 */
import { GatingBoard } from './index';
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'responses'
})

export class Response extends JsonApiModel {

    @Attribute()
    id: string;

    @Attribute()
    date: string;

    @Attribute()
    status: string;

    @Attribute()
    gate: string;

    @Attribute()
    description: string;

    @Attribute()
    created: string;

    @Attribute()
    modified: string;


    @BelongsTo()
    projects: GatingBoard[];

}