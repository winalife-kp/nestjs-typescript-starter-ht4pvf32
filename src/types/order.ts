import { Type } from 'class-transformer';
import {
    IsArray,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested,
    IsDateString,
    Min,
} from 'class-validator';


export enum OrderTypeEnum {
    PICK_UP = 'PICK_UP',
    DINE_IN = 'DINE_IN',
    DELIVERY_BY_PROVIDER = 'DELIVERY_BY_PROVIDER',
    DELIVERY_BY_RESTAURANT = 'DELIVERY_BY_RESTAURANT',
}

export class OrderDto {
    @IsString()
    externalId: string;

    @IsString()
    pickupCode: string;

    @IsInt()
    @Min(0)
    subTotal: number;

    @IsInt()
    @Min(0)
    total: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    discount?: number;

    @IsEnum(OrderTypeEnum)
    type: OrderTypeEnum;

    @IsUUID(4)
    restaurantId: string;

    @IsDateString()
    placedAt: string;

    @IsDateString()
    pickupTime: string;

    @IsString()
    currency: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CustomerDto)
    customer?: CustomerDto | null = null;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PositionDto)
    @IsOptional()
    positions?: PositionDto[] = [];
}

export class CustomerDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string | null = null;
}

export class PositionDto {
    @IsString()
    id: string;

    @IsString()
    name: string;
  
    @IsInt()
    @Min(0)
    count: number;
  
    @IsInt()
    @Min(0)
    baseUnitPrice: number;
  
    @IsInt()
    @Min(0)
    baseTotalPrice: number;
  
    @IsArray()
    @IsOptional()
    @Type(() => PositionDto)
    modifiers?: PositionDto[] = [];
  }