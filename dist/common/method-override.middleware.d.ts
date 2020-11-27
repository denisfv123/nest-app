import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as methodOverride from 'method-override';
export declare class MethodOverrideMiddleware implements NestMiddleware {
    static configure(getter: string | ((req: Request, res: Response) => string), opts?: methodOverride.MethodOverrideOptions): void;
    private static options;
    private static getter;
    use(req: any, res: any, next: any): void;
}
