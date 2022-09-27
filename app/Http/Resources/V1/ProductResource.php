<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->url_image,
            'price' => $this->price,
            'discount' => $this->discount,
            'category' => [
                'id' => $this->getCategory->id,
                'name' => $this->getCategory->name,
            ],
        ];
    }
}
