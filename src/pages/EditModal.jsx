import React, { useState, useEffect } from "react";
import "../assets/style/EditModal.css";

function EditModal({ course, onSave, onClose }) {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  useEffect(() => {
    if (course) {
      setEditedTitle(course.title);
      setEditedPrice(course.price);
    }
  }, [course]);

  const handleSave = () => {
    if (!editedTitle || !editedPrice) {
      alert("Judul dan harga tidak boleh kosong!");
      return;
    }

    onSave({
      ...course,
      title: editedTitle,
      price: editedPrice,
    });
  };

  if (!course) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Produk</h2>
        <div className="form-group">
          <label htmlFor="editTitle">Nama Produk</label>
          <input
            id="editTitle"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editPrice">Harga (Rp)</label>
          <input
            id="editPrice"
            type="text"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Batal
          </button>
          <button className="btn-save" onClick={handleSave}>
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
