/**
 * Created by duncan on 17/03/2017.
 */
import { Application, GatingBoard, Risk } from './index';
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
        status: string;

    @Attribute()
        description: string;

    @Attribute()
        created: string;

    @Attribute()
        modified: string;


    @HasMany()
        applications: Application[];

    @HasMany()
        risks: Risk[];

    @BelongsTo()
        gating_boards: GatingBoard[];
}