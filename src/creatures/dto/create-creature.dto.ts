import { ApiProperty } from "@nestjs/swagger";

export class CreateCreatureDto {
@ApiProperty({required:false})
name : string;
@ApiProperty()
description : string;
@ApiProperty()
lastSee : string;
@ApiProperty()
countLastSee : number;
@ApiProperty({default: false})
extinct : boolean;
}