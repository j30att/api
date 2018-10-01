@extends('layouts.static')

@section('content')
    <div class="deskwr">
        @include($_typeDevice.'.parts.haeder')
        <div class="main_content">
            @include($_typeDevice.'.bids.parts.matched')
            @include($_typeDevice.'.bids.parts.unmatched')
            @include($_typeDevice.'.bids.parts.settled')
            @include($_typeDevice.'.bids.parts.canceled')

            @include($_typeDevice.'.events.index')

        </div>
    </div>

    {{--place a bit modal window--}}
    @include($_typeDevice.'.bids.place_a_bit.index')



@endsection



