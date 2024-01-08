<div class="max-w-4xl mx-auto mt-5">
    <div class="px-4 sm:px-6 lg:px-8">
        <form wire:submit.prevent="save">
            <div class="mb-6">
                <label for="faq_quesion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question</label>
                <input type="text"
                        wire:model.defer="userFaqs.faq_quesion"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder=""
                        id="faq_quesion">
                @error('userFaqs.faq_quesion') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="faq_answer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Answer</label>
                <textarea class="form-control" id="faq_answer" name="faq_answer"
                                            wire:model.defer="userFaqs.faq_answer"></textarea>
                @error('userFaqs.faq_answer') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="mb-6">
                <label for="is_active" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is Active ?</label>
                <input type="checkbox"
                        wire:model.defer="userFaqs.is_active"
                       class=""
                       placeholder=""
                        id="is_active">
                @error('userFaqs.is_active') <span class="text-sm text-red-500">{{ $message }}</span> @enderror
            </div>
            <div class="flex items-center justify-start space-x-4">

                <a href="{{ url('hb-cpanel/faq/users') }}" class="text-gray-900  font-medium  text-sm ">Back</a>
                <button type="submit"
                        class="btn btn-info">
                    Save
                </button>
                <button type="button" class="btn btn-danger float-center" wire:confirm="Are you sure you want to delete this competition?"  wire:click="delete">Delete</button>
                
            </div>
        </form>

    </div>
</div>
