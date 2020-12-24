import { Router } from 'https://deno.land/x/oak/mod.ts';
import { home, signup } from './controllers/blog.ts';
const router = new Router();

router
        .get("/", home)
        .get("/daftar", signup)
        .get("/kategori", (ctx)=>{
            ctx.response.body = "ini halaman kategori";
        })
        .get("/about", (ctx)=>{
            ctx.response.body = "ini halaman About";
        });

        export default router;