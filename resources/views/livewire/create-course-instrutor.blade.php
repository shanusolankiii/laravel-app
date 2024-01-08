<div class="max-w-4xl mx-auto mt-5">
    <div class="px-4 sm:px-6 lg:px-8">
        <form wire:submit.prevent="save">
            <div class="mb-6">
                <label for="course_creator_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Creator Name</label>
                <input type="text"
                        wire:model.defer="courseCreators.course_creator_name"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                        id="course_creator_name">
                @error('courseCreators.course_creator_name') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="course_creator_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Creator
                    Description</label>
                <textarea class="form-control" id="course_creator_description" name="course_creator_description"
                                            wire:model.defer="courseCreators.course_creator_description"></textarea>
                @error('courseCreators.course_creator_description') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="flex items-center justify-start space-x-4">
                <a href="{{ url('hb-cpanel/course/creators') }}" class="text-gray-900  font-medium  text-sm ">Back</a>
                <button type="submit"
                        class="btn btn-info">
                    Save
                </button>
            </div>
        </form>

    </div>
</div>