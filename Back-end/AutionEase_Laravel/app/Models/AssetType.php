<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class AssetType extends Model
{
    use HasFactory;

    protected $table = 'AssetTypes'; // Chỉ định tên bảng nếu cần
    protected $primaryKey = 'assetTypeID'; // Đặt primary key cho model
    public $incrementing = false; // Nếu primary key không tự động tăng
    protected $keyType = 'string'; // Đặt kiểu của primary key nếu nó không phải là integer

    protected $fillable = [
        'assetTypeID',
        'assetTypeName',
        'delflag', // Sửa lỗi đánh máy ở đây
    ];
}
