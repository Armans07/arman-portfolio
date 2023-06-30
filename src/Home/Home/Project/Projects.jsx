import React from 'react';
import { Fade } from 'react-awesome-reveal';
import toyPic1 from "../../../../public/toy webside picture/Capture.jpg"
import summerChamp from "../../../../src/assets/Capture.jpg"
import foodRecipe from "../../../../src/assets/Capture food.jpg"

const Projects = () => {
    return (
        <div>

            <div class="container my-24 mx-auto md:px-6">

                <section class="mb-32 text-center lg:text-left">


                    <div class="container my-24 mx-auto md:px-6">

                        <section class="mb-32 text-center">
                            <Fade>
                                <h2 className='text-center text-3xl mb-2 mt-5 font-extrabold text-slate-600 '>My <span className='text-sky-500'>Projects</span></h2>
                                <hr className='w-48 border-2 mx-auto rounded-lg bg-slate-500' />
                            </Fade>

                            <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12 mt-10">
                                <div class="mb-6 lg:mb-0">
                                    <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div class="flex">
                                            <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                <img src={foodRecipe} class="w-full" />
                                              
                                            </div>
                                        </div>
                                        <div class="p-6">
                                            <h5 class="mb-4 text-lg font-bold">Food Recipe</h5>
                                            <p class="mb-6">
                                                <span className='uppercase  text-sky-500'>description loading......</span>. Sed sit amet mi eget urna
                                                placerat vulputate. Ut vulputate est non quam dignissim
                                                elementum. Donec a ullamcorper diam.
                                            </p>
                                            <h2 className='mb-2 font-bold'>Project Task</h2>
                                            <hr />
                                          <div className='mt-1 flex gap-2 justify-center'>
                                          <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                 <a href="https://food-recipe-client-aa502.web.app/">Live</a>
                                            </button>
                                            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                               <a href="https://github.com/Armans07/food-recipe-client">Client</a>
                                            </button>
                                            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                <a href="https://github.com/Armans07/food-recipe-server">Server</a>
                                            </button>
                                          </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="mb-6 lg:mb-0">
                                    <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div class="flex">
                                            <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                <img src={toyPic1} class="w-full" />

                                            </div>
                                        </div>
                                        <div class="p-6">
                                            <h5 class="mb-4 text-lg font-bold">Toy Shop</h5>
                                            <p class="mb-6">
                                                <span className='uppercase  text-sky-500'>description loading......</span>. Nulla facilisi. Sed aliquet
                                                diam orci, nec ornare metus semper sed. Integer volutpat
                                                ornare erat sit amet rutrum.
                                            </p>
                                            <h2 className='mb-2 font-bold'>Project Task</h2>
                                            <hr />
                                            <div className='mt-1 flex gap-2 justify-center'>
                                          <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                 <a href="https://toy-shop-d0f9a.web.app/">Live</a>
                                            </button>
                                            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                <a href="https://github.com/Armans07/toy-market-client">client</a>
                                            </button>
                                            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                <a href="https://github.com/Armans07/toy-market-server">SERVER</a>
                                            </button>
                                          </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-0">
                                    <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div class="flex">
                                            <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                                data-te-ripple-init data-te-ripple-color="light">
                                                <img src={summerChamp} class="w-full" />
                                            </div>
                                        </div>
                                        <div class="p-6">
                                            <h5 class="mb-4 text-lg font-bold">Summer Champ</h5>
                                            <p class="mb-6">
                                                <span className='uppercase  text-sky-500'>description loading......</span> , mi a mollis sagittis, metus felis mattis
                                                arcu, non vehicula nisl dui quis diam.
                                            </p>
                                            <h2 className='mb-2 font-bold'>Project Task</h2>
                                            <hr />
                                            <div className='mt-1 flex gap-2 justify-center'>
                                          <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                 <a href="https://summer-champ.web.app/">Live</a>
                                            </button>
                                            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                <a href="https://github.com/Armans07/summer-academy-client">client</a>
                                            </button>
                                            <button className="btn border-4 rounded-3xl border-sky-500 text-slate-600 mt-1">
                                                <a href="https://github.com/Armans07/summer-academy-server">server</a>
                                            </button>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default Projects;