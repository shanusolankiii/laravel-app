<div class="max-w-4xl mx-auto mt-5">
    <div class="px-4 sm:px-6 lg:px-8">
        <form wire:submit.prevent="update">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL Slug</label>
                <input type="text"
                        wire:model="seoUpdates.slug"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                       disabled>
                @error('seoUpdates.slug') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL Name</label>
                <input type="text"
                        wire:model="seoUpdates.url"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                       required="" disabled>
                @error('seoUpdates.url') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL Canonical URL</label>
                <input type="text"
                        wire:model="seoUpdates.canonical_url"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                       required="" disabled>
                @error('seoUpdates.canonical_url') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL Page Title</label>
                <input type="text"
                        wire:model="seoUpdates.page_title"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                       >
                @error('seoUpdates.page_title') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Page Title</label>
                <input type="text"
                        wire:model="seoUpdates.meta_title"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                       >
                @error('seoUpdates.meta_title') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="meta_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meta
                    Description</label>
                <textarea class="form-control" id="meta_description" name="meta_description"
                                            wire:model.defer="seoUpdates.meta_description"></textarea>
                @error('seoUpdates.meta_description') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="page_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Page
                    Description</label>
                <textarea class="form-control" id="page_description" name="page_description"
                                            wire:model.defer="seoUpdates.page_description"></textarea>
                @error('seoUpdates.page_description') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="flex items-center justify-start space-x-4">
                <a href="{{ url('hb-cpanel/seoUpdates') }}" class="text-gray-900  font-medium  text-sm ">Back</a>
                <button type="submit"
                        class="btn btn-info">
                    update
                </button>
            </div>
        </form>
    </div>
</div>