import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyDetailsService } from './my-details.service';
import { CreateMyDetailDto } from './dto/create-my-detail.dto';
import { UpdateMyDetailDto } from './dto/update-my-detail.dto';

@Controller('my-details')
export class MyDetailsController {
  constructor(private readonly myDetailsService: MyDetailsService) {}

  @Post()
  create(@Body() createMyDetailDto: CreateMyDetailDto) {
    return this.myDetailsService.create(createMyDetailDto);
  }

  @Get()
  findAll() {
    return this.myDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyDetailDto: UpdateMyDetailDto) {
    return this.myDetailsService.update(+id, updateMyDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myDetailsService.remove(+id);
  }
}
