<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateIssueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'subject' => 'required|string',
            'priority' => 'string|max:50',
            'status' => 'string|max:50',
            'due'=> 'date',
            'description' => 'string',
            'category_id'  => 'string|max:70',
            'issue_type_id' => 'string|max:70',
            'assignee' => 'string|max:70',
            'issue_type' => 'string|max:100'
        ];
    }
}
