/**
 * Created by duncan on 29/03/2017.
 */
import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Project } from "./project";

@JsonApiModelConfig({
    type: 'documents'
})
export class Document extends JsonApiModel{
    @Attribute()
    id: string;

    @Attribute()
    name: string;

    @Attribute()
    link: string;

    @Attribute()
    gate: string;

    @Attribute()
    created: string;


    @BelongsTo()
    projects: Project[];


}
